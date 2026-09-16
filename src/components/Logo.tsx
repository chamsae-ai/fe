import { Sparrow } from './Sparrow'
import * as styles from './Logo.css'

/**
 * 제품 표식이다. 상단바에서는 작게, 홈 가운데에서는 크게 쓴다.
 * 크기가 달라도 같은 표식이라 한 곳에서 그린다.
 *
 * 크기는 여기서만 정한다. 상자와 그림을 따로 두면 한쪽만 바뀌어 어긋난다.
 * 표식을 직접 그리는 곳도 이 값을 가져다 쓴다. 숫자를 두 곳에 적으면 한쪽만
 * 바뀐다.
 */
export const LOGO_PX = { sm: 34, md: 76, lg: 96 } as const

export function Logo({ size = 'sm' }: { size?: keyof typeof LOGO_PX }) {
  return (
    <span className={styles.mark} aria-hidden>
      <Sparrow size={LOGO_PX[size]} />
    </span>
  )
}
