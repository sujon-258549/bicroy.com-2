"use client"

import './acordian.css'
import React from 'react'

const Accordian = () => {
    return (
        <div>

            <details className="dropdown">
                <summary className="btn">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li>
                        <details className="dropdown">
                            <summary className="btn">Barguna</summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li>Barguna</li>
                                <li>Barisal</li>
                                <li>Bhola</li>
                                <li>Jhalokati</li>
                                <li>Patuakhali</li>
                                <li>Pirojpur</li>
                            </ul>
                        </details>
                    </li>
                    <li>Barisal</li>
                    <li>Bhola</li>
                    <li>Jhalokati</li>
                    <li>Patuakhali</li>
                    <li>Pirojpur</li>
                </ul>
            </details>

            <ul>
                {/* <!-- Barisal Division --> */}
                <li>
                    <strong>Barisal Division</strong>
                    <ul>

                    </ul>
                </li>

                {/* <!-- Chittagong Division --> */}
                <li>
                    <strong>Chittagong Division</strong>
                    <ul>
                        <li>Bandarban</li>
                        <li>Brahmanbaria</li>
                        <li>Chandpur</li>
                        <li>Chittagong</li>
                        <li>Cox's Bazar</li>
                        <li>Feni</li>
                        <li>Khagrachari</li>
                        <li>Lakshmipur</li>
                        <li>Noakhali</li>
                        <li>Rangamati</li>
                    </ul>
                </li>

                {/* <!-- Dhaka Division --> */}
                <li>
                    <strong>Dhaka Division</strong>
                    <ul>
                        <li>Dhaka</li>
                        <li>Faridpur</li>
                        <li>Gazipur</li>
                        <li>Gopalganj</li>
                        <li>Kishoreganj</li>
                        <li>Madaripur</li>
                        <li>Manikganj</li>
                        <li>Munshiganj</li>
                        <li>Narayanganj</li>
                        <li>Narsingdi</li>
                        <li>Rajbari</li>
                        <li>Shariatpur</li>
                        <li>Tangail</li>
                    </ul>
                </li>

                {/* <!-- Khulna Division --> */}
                <li>
                    <strong>Khulna Division</strong>
                    <ul>
                        <li>Bagerhat</li>
                        <li>Chuadanga</li>
                        <li>Jessore</li>
                        <li>Jhenaidah</li>
                        <li>Khulna</li>
                        <li>Kushtia</li>
                        <li>Magura</li>
                        <li>Meherpur</li>
                        <li>Narail</li>
                        <li>Satkhira</li>
                    </ul>
                </li>

                {/* <!-- Mymensingh Division --> */}
                <li>
                    <strong>Mymensingh Division</strong>
                    <ul>
                        <li>Jamalpur</li>
                        <li>Mymensingh</li>
                        <li>Netrokona</li>
                        <li>Sherpur</li>
                    </ul>
                </li>

                {/* <!-- Rajshahi Division --> */}
                <li>
                    <strong>Rajshahi Division</strong>
                    <ul>
                        <li>Bogra</li>
                        <li>Joypurhat</li>
                        <li>Naogaon</li>
                        <li>Natore</li>
                        <li>Chapainawabganj</li>
                        <li>Pabna</li>
                        <li>Rajshahi</li>
                        <li>Sirajganj</li>
                    </ul>
                </li>

                {/* <!-- Rangpur Division --> */}
                <li>
                    {/* <strong>Rangpur Division</strong> */}
                    <ul>
                        <li>Dinajpur</li>
                        <li>Gaibandha</li>
                        <li>Kurigram</li>
                        <li>Lalmonirhat</li>
                        <li>Nilphamari</li>
                        <li>Panchagarh</li>
                        <li>Rangpur</li>
                        <li>Thakurgaon</li>
                    </ul>
                </li>

                {/* <!-- Sylhet Division --> */}
                <li>
                    <strong>Sylhet Division</strong>
                    <ul>
                        <li>Habiganj</li>
                        <li>Moulvibazar</li>
                        <li>Sunamganj</li>
                        <li>Sylhet</li>
                    </ul>
                </li>
            </ul>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>

        </div>
    )
}

export default Accordian