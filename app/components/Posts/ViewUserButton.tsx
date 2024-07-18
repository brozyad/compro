"use client"

interface ViewUserButtonProps {
    userId: number
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({userId}) => {
    const handleClick = () => {alert(`user id: ${userId}`)};
    return (
        <>
            <button className="bg-orange-500 hover:bg-orange-600 px-2 rounded-md" onClick={handleClick}>Lihat user</button>
        </>
    )
}

export default ViewUserButton