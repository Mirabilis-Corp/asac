import React from 'react';
import Lang from "../lang";

export default function ({lang}) {
    return(
        <div className="app__main">
            <h1 className={"my-20"}>{Lang.main.title[lang]}</h1>
            <p className={"my-20"}>{Lang.main.main_text[lang]}</p>
            <button className="btn btn-primary">{Lang.main.discover[lang]}</button>
            <p>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ducimus laboriosam, laudantium placeat quo repudiandae tenetur voluptates. Adipisci dolorem ipsa praesentium quibusdam quis repellat repudiandae sed similique voluptate. Explicabo, hic!</span><span>Accusantium atque consequatur consequuntur dolor dolorem eum excepturi, fuga impedit inventore ipsa labore non numquam officia pariatur recusandae rerum sit temporibus velit? Ab alias assumenda explicabo labore, maiores quasi voluptatem.</span><span>Alias eaque eius exercitationem illum ipsa laboriosam laborum maiores mollitia nemo unde! Aspernatur, consequatur corporis cumque cupiditate distinctio eos error et fuga ipsa magni minima omnis tempora tenetur veniam, vitae?</span>
            </p>
        </div>
    );
}
