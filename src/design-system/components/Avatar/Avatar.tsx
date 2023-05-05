interface IAvatar {
  img: string;
  sizePx: number;
  className?: string;
  rest?: React.ImgHTMLAttributes<HTMLImageElement>;
}

const Avatar = ({ img, className, sizePx, ...rest }: IAvatar) => {
  return <img src={img} alt="avatar" className={`ds-avatar${` ${className}` || ""}`} width={sizePx} {...rest} />;
};

export default Avatar;
