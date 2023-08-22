import React from 'react'
import { AuthorWrapper, GuideSlot, GuideSlotcard, ScheduleStageguideContainer } from '../../styles/events'

function SlotCard() {
    return (
        <ScheduleStageguideContainer className="schedule-stage_guide-container">
            <GuideSlot className="guide-slot">
                <p>8:00am - 9:00am</p>                
                <GuideSlotcard className="guide-slot_card">
                    <h4>CSR, SSR, SSG, ISR and OMG.WTF?BBQ!</h4>
                    <AuthorWrapper className="author-wrapper">
                        <picture>
                            <img src="https://randomuser.me/api/portraits/lego/6.jpg" alt="" />
                        </picture>
                        <figcaption>Ahmad Awais</figcaption>
                    </AuthorWrapper>
                </GuideSlotcard>
            </GuideSlot>
        </ScheduleStageguideContainer>
    )
}

export default SlotCard
