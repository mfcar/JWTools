import {Injectable} from '@angular/core';
import {JwtCanvas} from "../models";

@Injectable({
    providedIn: 'root'
})
export class CanvasManagerService {
    private canvasList: JwtCanvas[] = [];

    constructor() {
    }

    public listCanvas(): JwtCanvas[] {
        return this.canvasList;
    }

    public addNewCanvas(canvasName: string): void {
    }

    public removeCanvas(canvas: JwtCanvas): void {
    }

    private initializeCanvas(): void {
    }
}
