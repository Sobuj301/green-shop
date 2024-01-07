

const MemberCard = ({ member }) => {
    const { name, img, designation } = member
    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-60">
                    <img src={img} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {name}
                    </h4>
                    <p>{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;