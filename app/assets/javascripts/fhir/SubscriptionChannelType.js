const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const SubscriptionChannelTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'SubscriptionChannelType' },
  _type: { type: String, default: 'FHIR::SubscriptionChannelType' },
});

class SubscriptionChannelType extends mongoose.Document {
  constructor(object) {
    super(object, SubscriptionChannelTypeSchema);
    this.typeName = 'SubscriptionChannelType';
    this._type = 'FHIR::SubscriptionChannelType';
  }
}

module.exports.SubscriptionChannelTypeSchema = SubscriptionChannelTypeSchema;
module.exports.SubscriptionChannelType = SubscriptionChannelType;
