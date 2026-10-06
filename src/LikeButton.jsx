import { useState } from "react";

export default function LikeButton() {
    let [like, setLike] = useState(true);
    let [count, setCount] = useState(0);

    let toggleButton = () => {

        setLike(!like);
        setCount(count + 1);
    }

    return (
        <div>
            <h4 >Like Button</h4>
            <h4>Count : {count}</h4>


            <p onClick={toggleButton} >

                {
                    like ?
                        <i class="fa-regular fa-heart"></i>
                        : <i className="fa-solid fa-heart"></i>
                }
            </p>

        </div>
    )
}