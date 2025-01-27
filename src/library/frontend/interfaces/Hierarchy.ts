const hierarchy = ["primary", "secondary", "tertiary"] as const;
export type Hierarchy = (typeof hierarchy)[number];
