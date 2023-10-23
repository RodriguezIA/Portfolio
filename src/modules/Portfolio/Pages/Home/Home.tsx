import { createEffect, createSignal } from 'solid-js'
import { Clock} from '../../Components/Clock/Clock'
import './Home.css'

import avatarImg from '../../../../assets/avatar.jpg'
import jsonItemData from "../../../../data/item.json"
import { Iitem } from '../../../../interface/Item'

// La pgina estara inspirada en el menu de inicio de nintendo switch
// se integrara de 4 partes principales

// 1. el tool abr que tendra mi informacion principal
// 2. Los ites que seran, trabajos, proyectos, etc
// 3. las categorias
// 4. ayuda descriptiva

function Home() {

    const [items, setItems] = createSignal<Iitem[]>([])

    createEffect(() => {
        const items: Iitem[] = jsonItemData
        setItems(items)
    })

    return (
        <div class="page">
            {/* toolbar */}
            <div class="toolbar">
                {/* avatar */}
                <div class="toolbar-avatar">
                    <img src={avatarImg} alt="avatar image" class="avatar-img" />
                </div>

                {/* tollbar data */}
                <div class="toolbar-avatar">
                    <Clock />
                </div>
            </div>

            {/* items */}
            <div class="items">
                <div class="item-list">
                    {items().map((item: Iitem) => (
                        <div class='item'>
                            <img src={item.image} alt="" class='item-image' />
                        </div>
                    ))}
                </div>
            </div>

            {/* Sections */}
            <div class="sections">Sections</div>

            {/* Help context */}
            <div class="help">
                {/* contect help */}
                <div>help</div>

                {/* options buttons */}
                <div>options buttons</div>
            </div>
        </div>
    );
}

export default Home;
