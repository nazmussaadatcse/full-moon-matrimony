import useContactRequest from "../hooks/useContactRequest";


const MyContactRequest = () => {

    const [reqUsers] = useContactRequest();
    console.log(reqUsers);
    
    return (
        <div>
            
        </div>
    );
};

export default MyContactRequest;