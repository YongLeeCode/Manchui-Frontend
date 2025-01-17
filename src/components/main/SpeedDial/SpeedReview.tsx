import type { Props } from '@/components/shared/Svg';
import { Svg } from '@/components/shared/Svg';

export default function SpeedReview({ color = '#FFFFFF', className, ...props }: Props) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill={color} className={className} {...props}>
      <path d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z" />
    </Svg>
  );
}
