import React from 'react'
import Card from './Card'

const MidSection = () => {
  return (
    <div className="flex  py-10 flex-col gap-10 bg-gray-300">
        <div>
            <h1 className=" text-center text-pink-500 sm:text-5xl text-2xl ">Find Jobs Near Me by City</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-10">
            <Card src="https://www.workjapan.jp/wp-content/themes/workjapan_v1.1.8/assets/images/jobseeker/index/renewal2024/thumb_tokyo.png" title="TOKYO" />
            <Card src="https://www.workjapan.jp/wp-content/themes/workjapan_v1.1.8/assets/images/jobseeker/index/renewal2024/thumb_chiba.png" title="CHIBA"
             />
            <Card src="https://www.workjapan.jp/wp-content/themes/workjapan_v1.1.8/assets/images/jobseeker/index/renewal2024/thumb_saitama.png" title="SAITAMA"
             />
            <Card src="https://www.workjapan.jp/wp-content/themes/workjapan_v1.1.8/assets/images/jobseeker/index/renewal2024/thumb_kanagawa.png" title="KANAGAWA"
             />
        </div>
    </div>
  )
}

export default MidSection