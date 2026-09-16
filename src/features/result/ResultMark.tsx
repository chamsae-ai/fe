import type { JobResponse } from '../../api/types'
import { LOGO_PX } from '../../components/Logo'
import { Sparrow } from '../../components/Sparrow'
import { finalVerdict, isTerminalStatus } from '../../domain/job'
import * as styles from './ResultSparrow.css'

/**
 * 상단바 가운데의 참새다. 어느 서비스인지와 지금 어디까지 왔는지를 한 표식이
 * 같이 말한다.
 *
 * 이름 글씨를 두지 않는다. 표식만으로 서비스가 드러나고, 글씨까지 두면
 * 상태를 말하는 그림 옆에 안 변하는 이름이 붙어 어느 쪽을 봐야 할지 흐려진다.
 *
 * 크기는 홈 상단바의 표식보다 조금 크다. 상단바 가운데에 이것 하나만 있어서
 * 같은 크기로 두면 비어 보인다. 두 모습을 같은 크기로 둬야 상태가 바뀔 때
 * 표식이 커졌다 작아지지 않는다.
 *
 * 세 모습이다.
 *
 * - 분석하는 동안 난다.
 * - 판정이 나온 주장이 하나라도 있으면 쪽지를 물고 앉는다.
 * - 하나도 없으면 빈 부리로 앉는다. 아무것도 물어 오지 못한 것이다.
 */
const MARK_PX = Math.round(LOGO_PX.sm * 1.15)

export function ResultMark({ job }: { job: JobResponse | undefined }) {
  if (job === undefined || !isTerminalStatus(job.status)) {
    return (
      <span className={styles.path} aria-hidden>
        <span className={styles.flying}>
          <Sparrow size={MARK_PX} flying wingClassName={styles.wing} />
        </span>
      </span>
    )
  }

  return (
    <span className={styles.perched} aria-hidden>
      <Sparrow size={MARK_PX} carrying={broughtBack(job)} />
    </span>
  )
}

/**
 * 물어 온 것이 있는지. 판정이 나온 주장이 하나라도 있으면 그렇다.
 *
 * 작업 상태로 가르지 않는다. 시간이 초과되거나 일부만 끝나도 이미 나온 판정은
 * 사용자가 읽을 결과다. 그것까지 빈손으로 표시하면 화면에 있는 결과와 어긋난다.
 *
 * 반대로 하나도 없으면 빈 부리다. 검증할 주장이 없거나 전부 실패한 경우다.
 */
function broughtBack(job: JobResponse): boolean {
  const claims = job.result?.claim_verification?.claims ?? []
  return claims.some((claim) => finalVerdict(claim) !== null)
}
