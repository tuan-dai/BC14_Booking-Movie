import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListTicket } from '../../../redux/actions/tickerRoom'
import CloseIcon from '@mui/icons-material/Close';
import { bookingTicket } from '../../../redux/actions/ticket';

export default function BookingTicket(props) {
    const { id } = props.match.params
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListTicket(id))
    }, [])
    const { ticketRoom } = useSelector(state => state.ListTicket_Reducer)
    const { listBookingSeat, total } = useSelector(state => state.BookingSeat_Reducer)


    const danhSachVe = listBookingSeat.map(ticket => {
        return { maGhe: ticket.maGhe, giaVe: ticket.giaVe }
    })
    const listBookingTicket = { maLichChieu: 44426, danhSachVe }

    // RENDER SEAT
    let statusSeat = ''
    let bookingSeat = ''
    let choosingSeat = ''

    const renderSeat = () => {
        return ticketRoom?.danhSachGhe.map(seat => {
            if (seat.loaiGhe === 'Vip') {
                statusSeat = 'vip-seat'
            }
            if (seat.daDat === true) {
                bookingSeat = 'seat-booked'
            } else { bookingSeat = '' }

            const index = listBookingSeat.findIndex(item => item.maGhe === seat.maGhe)
            if (index !== -1) {
                choosingSeat = 'choosing-seat'
            } else { choosingSeat = '' }

            return <button key={seat.maGhe} className={`normal-seat ${statusSeat} ${bookingSeat} ${choosingSeat}
            focus:outline-none`} disabled={bookingSeat}
                onClick={() => {
                    dispatch({ type: 'BOOKING_SEAT', seat })
                }} >
                {seat.daDat ? <CloseIcon className='text-xl' /> : seat.stt}
            </button>
        })
    }

    //RENDER SEAT BOOKED
    const renderBookedSeat = () => {
        return listBookingSeat.sort((a, b) => a.tenGhe - b.tenGhe).map(seat => {
            return <span key={seat.maGhe} className='text-xl text-danger font-bold'>{seat.tenGhe}</span>
        })
    }

    return (
        <section className='container-fluid mx-auto xs:flex xs:flex-col xs:items-center
        lg:flex lg:flex-row lg:items-start my-16'>
            {/* LEFT */}
            <div className='xs:w-full lg:w-8/12 xl:w-9/12'>
                <div className='trapezoid flex justify-center ml-2 mb-12'>
                    <span className='font-bold text-3xl text-white mt-3'>Màn hình</span>
                </div>
                {renderSeat()}
                {/* STATUS BOOKING TICKET */}
                <div className='row items-center xs:justify-between sm:justify-center 
                gap-8 mt-8 xs:mb-8 xs:pl-6 md:pl-0'>
                    <div className='flex items-center gap-3'>
                        <span className='bg-gray-300 w-8 h-8 rounded-md'></span>
                        <span>Ghế thường</span>
                    </div>
                    <div className='flex items-center gap-3 xs:-translate-x-1/4 sm:-translate-x-0'>
                        <span className='bg-red-500 w-8 h-8 rounded-md'></span>
                        <span>Ghế VIP</span>
                    </div>

                    <div className='flex items-center gap-3'>
                        <span className='bg-yellow-300 w-8 h-8 rounded-md'></span>
                        <span>Ghế đang chọn</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='text-center text-white bg-blue-400
                        font-medium w-8 h-8 leading-7 rounded-md'>x</span>
                        <span>Ghế đã đặt</span>
                    </div>
                </div>

            </div>

            {/* RIGHT */}
            <div className='xs:w-full md:w-7/12 lg:w-4/12 xl:w-3/12
            shadow-md p-4 h-full bg-gray-200'>
                <p className='text-center my-4 text-4xl font-bold'>{ticketRoom?.thongTinPhim?.tenPhim}</p>
                <div className='flex items-center justify-between py-4 border-dashed border-t border-gray-400' >
                    <span className='font-bold'>Ngày chiếu giờ chiếu</span>
                    <span>{ticketRoom?.thongTinPhim?.ngayChieu} <span className='text-danger'>- {ticketRoom?.thongTinPhim?.gioChieu}</span></span>
                </div>
                <div className='flex items-center justify-between py-4 border-dashed border-t border-gray-400'>
                    <span className='font-bold'>Cụm rạp</span>
                    <span>{ticketRoom?.thongTinPhim?.tenCumRap}</span>
                </div>
                <div className='grid grid-cols-12 py-4 border-dashed border-t border-gray-400'>
                    <span className='font-bold col-span-3'>Ghế chọn</span>
                    {renderBookedSeat()}
                </div>
                <div className='flex items-center justify-between mt-16 py-4 border-dashed border-b border-gray-400'>
                    <span className='font-bold'>Ưu đãi</span>
                    <span>0%</span>
                </div>
                <div className='flex items-center justify-between py-4 border-dashed border-b border-gray-400'>
                    <span className='font-bold'>Tổng tiền</span>
                    <span className='text-2xl font-bold text-danger'>{total} VND</span>
                </div>
                <button className='btn btn-success mt-4 w-full h-12'
                    onClick={() => dispatch(bookingTicket(listBookingTicket, props.history))}
                >ĐẶT VÉ</button>
            </div>
        </section>
    )
}
