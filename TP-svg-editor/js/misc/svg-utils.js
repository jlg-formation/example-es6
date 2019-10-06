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
} 