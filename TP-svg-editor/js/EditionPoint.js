export class EditionPoint {
    constructor(x, y, label, onMouseDownFn) {
        this.group = document.createElementNS("http://www.w3.org/2000/svg", 'g');
        this.group.setAttribute('class', label);
    
        const circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        circle.setAttribute('r', 3);
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('fill', 'white');
        circle.setAttribute('stroke', 'black');
        this.group.appendChild(circle);

        const clickableArea = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        clickableArea.setAttribute('r', 10);
        clickableArea.setAttribute('cx', x);
        clickableArea.setAttribute('cy', y);
        clickableArea.setAttribute('fill', 'transparent');
        clickableArea.setAttribute('stroke', 'transparent');
        clickableArea.setAttribute('class', 'clickable');
        clickableArea.addEventListener('mousedown', event => {
            event.stopPropagation();
            onMouseDownFn(event);
        });
        this.group.appendChild(clickableArea);
        
    }

    getGroup() {
        return this.group;
    }
}
