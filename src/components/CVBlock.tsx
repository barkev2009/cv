import React, { FC } from 'react'
import { CVBlockProps } from './interfaces/CVBlockInterfaces'

const CVBlock : FC<CVBlockProps> = ({blockName, namedPoints, content, namedContent}) => {
  return (
    <div>
        <h2>{blockName}</h2>
        <ul>
        {
            namedPoints ? namedContent?.map(item => 
            <div>
                <div className='block-item'>{item?.key}</div>
                <div className='block-item'>{item.value}</div>
            </div>) : 
            content?.map(
                item => <li>{item.name}</li>
            )
        }
        </ul>
    </div>
  )
}

export default CVBlock