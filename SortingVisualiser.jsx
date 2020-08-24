import React from 'react';
import * as SortingAlgorithms from '../SortingAlgorithms/SortingAlgorithms.js';
import './SortingVisualiser.css';

export default class SortingVisualiser extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }
    
    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for(let i=0; i<200; i++){
            array.push(randomIntFromInterval(5,700));
        }
        this.setState({array});
    }

    mergesort(){
        const animations = SortingAlgorithms.mergesort(this.state.array);
        for(let i=0; i<animations.length; i++){
            const arraybars = document.getElementsByClassName('array-bar');
            const iscolorchange = i%3 !== 2;
            if(iscolorchange){
                const [baroneindex,bartwoindex] = animations[i];
                const baronestyle = arraybars[baroneindex].style;
                const bartwostyle = arraybars[bartwoindex].style;
                const color = i%3 === 0 ? 'red' : 'turquoise';

                setTimeout(() => {
                    baronestyle.backgroundColor = color;
                    bartwostyle.backgroundColor = color;
                }, i*1);
            }
            else{
                setTimeout(() => {
                    const [baroneindex, newheight] = animations[i];
                    const baronestyle = arraybars[baroneindex].style;
                    baronestyle.height = `${newheight}px`;
                }, i*1);
            }
        }
    }

    render(){
        const {array} = this.state;

        return (
            <div classname="array-container">
            {array.map((value,idx) => (
                <div 
                className="array-bar" 
                key={idx}
                style={{height: `${value}px`}}></div>
            ))}
            <br></br>
            <button onClick={()=> this.resetArray()}>Generate New Array</button>
            <button onClick={()=> this.mergesort()}>Merge Sort</button>
            </div>
        );
    }
}


function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
