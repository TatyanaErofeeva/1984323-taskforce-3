import { Entity } from '@project/util/util-types';
import { Subscriber } from '@project/shared/app-types';

export class EmailSubscriberEntity implements Entity<EmailSubscriberEntity>, Subscriber {
    public id: string;
    public email: string;
    public fullname: string;
    public userId: string;

    constructor(emailSubscriber: Subscriber) {
        this.fillEntity(emailSubscriber);
    }

    public fillEntity(entity: Subscriber) {
        this.email = entity.email;
        this.fullname = entity.fullname;
        this.id = entity.id ?? '';
    }

    public toObject(): EmailSubscriberEntity {
        return { ...this };
    }
}