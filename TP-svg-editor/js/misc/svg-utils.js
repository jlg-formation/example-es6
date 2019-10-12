export class SVGUtils {
    static getCoordinates(event) {
        const e = event.target;
        const dim = e.getBoundingClientRect();
        const x = event.clientX - dim.left;
        const y = event.clientY - dim.top;
        return { x, y };
    }

    static removeAllChildren(group) {
        while (group.firstChild) {
            group.removeChild(group.firstChild);
        }
    }

    static addGroup(parent, name) {
        const group = document.createElementNS("http://www.w3.org/2000/svg", 'g');
        group.setAttribute('class', name);
        parent.appendChild(group);
        return group;
    }
} 