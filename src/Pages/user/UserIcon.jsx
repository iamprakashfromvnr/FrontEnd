import React, { useEffect, useState } from 'react'

const getColor = (letter) => {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#808080'];
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letterIndex = alphabet.indexOf(letter.toUpperCase());
  return colors[letterIndex % colors.length];
};
const UserIcon = ({ user }) => {
  const colorCode = getColor(user[0]);

  return (
    <div className='flex justify-center items-center gap-4'>
      <span className='w-8 h-8 rounded-full flex justify-center items-center text-white' style={{ backgroundColor: colorCode }}>{user[0].toUpperCase()}</span>
      <span>{user}</span>
    </div>
  )
}

export default UserIcon
