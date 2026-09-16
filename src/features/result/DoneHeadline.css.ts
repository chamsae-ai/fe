import { style } from '@vanilla-extract/css'

import { vars } from '../../styles/contract.css'

/** 진행 머리말이 있던 자리를 그대로 받는다. 같은 크기로 둬야 자리가 흔들리지 않는다. */
export const title = style({
  fontSize: vars.font.size.xxxl,
  fontWeight: vars.font.weight.bold,
  letterSpacing: vars.font.letterSpacing.tighter,
  lineHeight: vars.font.lineHeight.tight,
})

/**
 * 붓 자국의 모양이다. 왼쪽에서 눌러 긋고 오른쪽으로 서서히 빼며, 양 끝은
 * 둥글게 맺는다. 색은 모양에서 떼어 두어야 계약의 색을 그대로 쓸 수 있다.
 * 그래서 그림을 마스크로 쓰고 색은 배경으로 준다.
 */
const BRUSH =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath d='M9 2C40 3 70 6 96 8.5A2.5 2.5 0 0 1 96 13.5C70 16 40 17 9 18A8 8 0 0 1 9 2Z'/%3E%3C/svg%3E\")"

/**
 * 머리말에서 서비스 이름만 강조한다. 글자 뒤에 깔아 아랫부분에 겹친다. 홈의
 * `참`·`새` 강조와 같은 방식이다.
 */
export const brush = style({
  position: 'relative',
  display: 'inline-block',
  isolation: 'isolate',
  selectors: {
    '&::before': {
      content: '',
      position: 'absolute',
      left: '-0.12em',
      right: '-0.14em',
      bottom: '-0.08em',
      height: '0.44em',
      zIndex: -1,
      backgroundColor: vars.color.brand.clay,
      maskImage: BRUSH,
      WebkitMaskImage: BRUSH,
      maskSize: '100% 100%',
      WebkitMaskSize: '100% 100%',
      maskRepeat: 'no-repeat',
      WebkitMaskRepeat: 'no-repeat',
      transform: 'rotate(-1.4deg)',
    },
  },
})
