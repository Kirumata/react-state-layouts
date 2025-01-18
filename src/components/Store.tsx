import { Component } from 'react'
import IconSwitch from "./IconSwitch"
import CardsView from "./CardsView";
import ListView from "./ListView";

import { Product } from "./utils";

export default class Store extends Component {
    state: { icon_state: string } = { icon_state: "view_list" };
    render() {
        const products: Product[] = [{
            name: "Nike Metcon 2",
            price: "130",
            color: "red",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "blue",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
        }, {
            name: "Nike free run",
            price: "170",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
        }, {
            name: "Nike Metcon 3",
            price: "150",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
        }];
        let chosenList;
        switch(this.state.icon_state){
            case "view_module":{
                chosenList = <ListView items={products}></ListView>;
                break;
            }
            case "view_list":{
                chosenList = <CardsView cards={products}></CardsView>
                break;
            }
        }

        return (
            <>
            
                <IconSwitch icon={this.state.icon_state} onSwitch={() => {
                    this.state.icon_state == "view_list" ? this.setState(() => ({ icon_state: "view_module" })) : this.setState(() => ({ icon_state: "view_list"}));
                    console.log(this.state.icon_state);
                }}></IconSwitch>
                {chosenList}
            </>
        )
    }

}