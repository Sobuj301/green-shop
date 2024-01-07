import { useEffect, useState } from "react";
import MemberCard from "./MemberCard";

const Member = () => {
    const [members,setMember] = useState([])
    useEffect(()=>{
        fetch('member.json')
        .then(res => res.json())
        .then(data =>setMember(data))
    },[])
    return (
        <div>
            <h2 className='text-4xl font-bold mt-5 text-center underline'> <span className='text-green-500'>Green Shop</span> Member</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    members?.map(member =><MemberCard key={member.id} member={member}></MemberCard>)
                }
            </div>
        </div>
    );
};

export default Member;