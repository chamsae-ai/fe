import { keyframes, style } from '@vanilla-extract/css'

import { vars } from '../../styles/contract.css'

/**
 * 왼쪽에서 오른쪽으로 지나간다. 되돌아오면 제자리에서 흔들리는 것으로 보여
 * 날아가는 것으로 읽히지 않는다. 양 끝에서 흐려지게 해야 다시 시작할 때
 * 튀지 않는다.
 *
 * 제자리를 가운데에 두고 좌우로 같은 거리를 간다. 한쪽으로 치우치면 절반쯤
 * 지났을 때 상단바의 가운데에서 벗어난다.
 */
const drift = keyframes({
  '0%': { transform: 'translateX(-22px)', opacity: 0 },
  '12%, 82%': { opacity: 1 },
  '100%': { transform: 'translateX(22px)', opacity: 0 },
})

/** 위아래로 얕게 뜬다. 한 칸이 크면 표식이 화면에서 튀어 보인다. */
const hover = keyframes({
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-6px)' },
})

/** 날개를 접었다 편다. 표식의 획 하나라 각도만 바꾼다. */
const flap = keyframes({
  '0%, 100%': { transform: 'rotate(6deg)' },
  '50%': { transform: 'rotate(-16deg)' },
})

/**
 * 가로 이동과 위아래 뜨기를 다른 상자에 나눠 건다. 한 요소에 두 움직임을
 * 함께 걸면 키프레임마다 두 값을 다 적어야 하고, 한쪽 주기를 바꿀 때 다른
 * 쪽까지 다시 계산해야 한다.
 */
export const path = style({
  display: 'inline-flex',
  animation: `${drift} 6s ${vars.motion.easing.standard} infinite`,
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
})

export const flying = style({
  display: 'inline-flex',
  color: vars.color.text.primary,
  animation: `${hover} 2.4s ${vars.motion.easing.standard} infinite`,
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
})

export const wing = style({
  transformOrigin: '20px 62px',
  animation: `${flap} 1.2s ${vars.motion.easing.standard} infinite`,
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
})

/** 다 물어온 참새다. 움직이지 않는다. 끝난 자리에서 더 움직이면 아직 하는 중으로 읽힌다. */
export const perched = style({
  display: 'inline-flex',
  color: vars.color.text.primary,
})
