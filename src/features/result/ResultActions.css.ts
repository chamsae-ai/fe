import { style } from '@vanilla-extract/css'

import { vars } from '../../styles/contract.css'

export const actions = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space.sm,
  padding: `${vars.space.md} ${vars.space.lg} ${vars.space.xxl}`,
})

export const meta = style({
  alignSelf: 'flex-start',
  color: vars.color.text.faint,
  fontSize: vars.font.size.xs,
})

export const feedback = style({
  color: vars.color.text.faint,
  fontSize: vars.font.size.xs,
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
})

/**
 * 다시 분석은 이 화면에서 유일하게 누를 것이라 눈에 걸려야 한다. 기본 버튼보다
 * 두껍고 글씨도 굵게 둔다. 목록을 다 읽고 내려온 자리라 작으면 지나친다.
 */
export const retry = style({
  minHeight: '3rem',
  fontSize: vars.font.size.xxl,
  fontWeight: vars.font.weight.bold,
})
