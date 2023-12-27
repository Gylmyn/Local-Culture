

import React from 'react'
import DropDown from './DropDown'
import Buttons from './Buttons'

export default function BoxDrop() {
  return (
    <div className=' h-[106px] rounded-[10px] bg-primary-50 shadow-lg'>
        <div className='px-[30px]  pt-[20px] gap-[10px] flex items-end justify-center'>
            <DropDown text='Nama Daerah' label='Nama Daerah'/>
            <DropDown text='Kabupaten' label='Kabupaten'/>
            <DropDown text='Kecamatan' label='Kecamatan'/>
            <Buttons type='primary' size='medium' text='Cari Daerah' icon='/Search.svg' />
        </div>
    </div>
  )
}
