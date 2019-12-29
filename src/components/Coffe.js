import React, { useEffect, useState } from 'react'
import './Coffe.scss'

const Coffe = () => {
    const [date, setDate] = useState(null)
    const getDays = () => {
        var date1 = new Date('10/15/2018')
        var date2 = new Date()

        var differenceInTime = date2.getTime() - date1.getTime()
        let differenceInDays = differenceInTime / (1000*3600*24)
        return Math.round(differenceInDays)
    }
    useEffect(() => {
        setDate(getDays)
    }, [])
	return (
		<div className='counters'>
			<div className='overlay' />
			<div className='narrow-content'>
				<div className='row' />
				<div className='row'>
					<div className='col-lg-4 text-center animate-box fadeInUp animated'>
						<span className='counter js-counter'>1342</span>
						<span className='counter-label'>Cups of Coffee</span>
					</div>
					<div className='col-lg-4 text-center animate-box fadeInUp animated'>
						<span className='counter js-counter'>{date}</span>
						<span className='counter-label'>Days Progamming</span>
                    </div>
                    <div className='col-lg-4 text-center animate-box fadeInUp animated'>
						<span className='counter js-counter'>37</span>
						<span className='counter-label'>Countries visited</span>
					</div>
					
				</div>
			</div>
		</div>
	)
}

export default Coffe
