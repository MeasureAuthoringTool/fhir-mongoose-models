const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const SubscriptionStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'SubscriptionStatus' },
  _type: { type: String, default: 'FHIR::SubscriptionStatus' },
});

class SubscriptionStatus extends mongoose.Document {
  constructor(object) {
    super(object, SubscriptionStatusSchema);
    this.typeName = 'SubscriptionStatus';
    this._type = 'FHIR::SubscriptionStatus';
  }
}

module.exports.SubscriptionStatusSchema = SubscriptionStatusSchema;
module.exports.SubscriptionStatus = SubscriptionStatus;
