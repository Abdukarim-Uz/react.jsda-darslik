
interface dataTypes {
    logged: boolean;
    username: string;
    age?: number;
}

function Header({ logged, username }: dataTypes) {
    return (
        <div>
            {logged}
            {username}
        </div>
    )
}

export default Header