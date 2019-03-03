import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IDashboardService } from './dashboard.service';

class Dashboard {

    private _fullInfoBox = [];

    get fullInfoBox() {
        return this._fullInfoBox;
    }

    set fullInfoBox(value) {
        this._fullInfoBox = value;
    }

    constructor(private dashboardService: IDashboardService) { }

    getInfoBox(): Observable<any> {
        return this.dashboardService.getInfoBoxData().pipe(
            map(object => {
                return this.addQuantityToObject(object);
            })
        );
    }

    private addQuantityToObject(object): any[] {
        const result = [];

        for (const key in object) {
            if (object.hasOwnProperty(key)) {

                this.fullInfoBox.map(info => {
                    if (key === info.key) {
                        result.push({
                            ...info,
                            quantity: object[key]
                        });
                    }
                });
            }
        }

        return result;
    }

    getTopApplicants(): Observable<any> {
        return this.dashboardService.getTopApplicantsData();
    }
}

export default Dashboard;
