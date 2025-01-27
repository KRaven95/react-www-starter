import { useState, useEffect, useRef } from "react";

interface UxItem {
  key: string;
  className: string;
}

export type UxArrayReturn = UxItem[];

function useUxArray(sourceArray: string[]): UxArrayReturn {
  const [array, setArray] = useState<UxItem[]>([]);
  const [queue, setQueue] = useState<string[]>([]); // Queue for new items
  const isRemoving = useRef(false); // Ref to track removal status

  // Function to compute the keys of the source and current arrays
  const computeKeys = (source: string[], current: UxItem[]) => {
    const sourceKeys = new Set(source);
    const currentKeys = new Set(current.map((item) => item.key));
    return { sourceKeys, currentKeys };
  };

  // Function to determine items that need to be added or removed
  const computeDifferences = (
    source: string[],
    current: UxItem[],
    sourceKeys: Set<string>,
    currentKeys: Set<string>
  ) => {
    const toAdd = source.filter((key) => !currentKeys.has(key));
    const toRemove = current.filter((item) => !sourceKeys.has(item.key));
    return { toAdd, toRemove };
  };

  // Function to handle removal of items with a delay
  const handleRemoveItems = (itemsToRemove: UxItem[], itemsToAdd: string[]) => {
    setArray((prevArray) =>
      prevArray.map((item) =>
        itemsToRemove.some((removeItem) => removeItem.key === item.key) ? { ...item, className: "delete" } : item
      )
    );

    // Set the removal flag
    isRemoving.current = true;

    setTimeout(() => {
      setArray((prevArray) =>
        prevArray.filter((item) => !itemsToRemove.some((removeItem) => removeItem.key === item.key))
      );
      setQueue((prevQueue) => [...prevQueue, ...itemsToAdd]); // Add items to the queue
      isRemoving.current = false; // Reset the removal flag
    }, 300); // Duration of the delete animation
  };

  // Function to add new items from the queue
  const handleAddItems = (itemsToAdd: string[]) => {
    setArray((prevArray) => [...prevArray, ...itemsToAdd.map((key) => ({ key, className: "appear" }))]);
  };

  useEffect(() => {
    const { sourceKeys, currentKeys } = computeKeys(sourceArray, array);
    const { toAdd, toRemove } = computeDifferences(sourceArray, array, sourceKeys, currentKeys);

    if (toRemove.length > 0) {
      handleRemoveItems(toRemove, toAdd);
    } else if (toAdd.length > 0 && !isRemoving.current) {
      handleAddItems(toAdd);
    }
  }, [sourceArray]);

  // Effect to handle queue items after removal
  useEffect(() => {
    if (!isRemoving.current && queue.length > 0) {
      handleAddItems(queue);
      setQueue([]); // Clear the queue after processing
    }
  }, [queue]);

  return array;
}

export default useUxArray;
