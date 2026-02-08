"use client";
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import {useRouter} from 'next/navigation';

const page = () => {
    const params = useParams();
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/about')
        }, 2333);
    }, [])
    
  return (
    <div>
      {params.slug}

      <button type="button" onClick={() => router.push('/about')}>
      About
    </button>
    </div>
  )
}

export default page
