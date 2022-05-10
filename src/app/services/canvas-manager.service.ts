import {Injectable} from '@angular/core';
import {CanvasAnatomy, JwtAnatomy, JwtCanvas} from "../models";

@Injectable({
    providedIn: 'root'
})
export class CanvasManagerService {
    private canvasList: JwtCanvas[] = [];

    public listCanvas(): JwtCanvas[] {
        return this.canvasList;
    }

    public hasAnyCanvas(): boolean {
        return this.canvasList.length > 0;
    }

    public addNewCanvas(canvasName: string): void {
        this.canvasList.push(this.initializeCanvas(canvasName));
    }

    public removeCanvas(id: number): void {
        this.canvasList = this.canvasList.filter(canvas => canvas.id !== id);
    }

    public getLastUsedId(): number {
        return this.canvasList[this.canvasList.length - 1].id;
    }

    private initializeCanvas(canvasName: string): JwtCanvas {
        let canvas = {} as JwtCanvas;

        canvas.canvasAnatomy = {
            name: canvasName,
            propertiesPanelOpen: false,
            lastModified: new Date()
        } as CanvasAnatomy;

        canvas.jwtAnatomy = {} as JwtAnatomy;

        return canvas;
    }
}
