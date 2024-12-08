
import Image from "next/image"
import Link from "next/link"
export default function Header () {


    return (

        <div>

            <div className="w-[1437px] h-[58px] mt-[70px] flex ">


                  {/* Bandage */}
                <div className="w-[187px] h-[58px] ml-[38px] flex ">
                    <h3 className="font-bold text-[24px] leading-[32px]">Bandage</h3>


                    <nav className="w-[1155px] h-[58px] ml-[180px]">
                    <div className="w-[261px] h-[25px]  flex ">
                        <ul className="flex gap-6">
                            <li className="w-[43px] h-[24px] ">Home</li>
                            <li className="w-[43px] h-[24px] "> <select > <option value="Shop">Shop</option></select></li>
                            <li className="w-[43px] h-[24px] ">About</li>
                            <li className="w-[43px] h-[24px] ">Blog</li>
                            <li className="w-[43px] h-[24px] ">Contact</li>
                            <li className="w-[43px] h-[24px] ">Pages</li>
                        </ul>


                        <div className="w-[324px] h-[54px]  ml-[300px] flex ">
                        <div className="w-[240px] h-[54px] gap-[30px]" >

                            <div className="flex gap-[15px]">
                        
                        <Link href={"./"} className="text-center text-[14px] font-bold leading-[24px] "> Login / Register</Link>


                        {/* search icons , mail , cards */}
                        <ul className="flex gap-[15px] items-center">
                            <li>
                                <Image src={"/search.png"} width={16}  height={16} alt=""  />
                            </li>

                            <li>
                                <Image src={"/shopping.png"} width={16}  height={16} alt=""  />
                            </li>

                            <li>
                                <Image src={"/dil.png"} width={16}  height={16} alt=""  />
                            </li>
                        </ul>
                             
                        </div>

                        

                            

                        </div>

                    </div>



                    </div>

                    

                </nav>

                </div>

                

            </div>


        </div>






















































        
    )
}