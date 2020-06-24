const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubscriptionChannelTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'SubscriptionChannelType' },
});

class SubscriptionChannelType extends mongoose.Document {
  constructor(object) {
    super(object, SubscriptionChannelTypeSchema);
    this._type = 'FHIR::SubscriptionChannelType';
  }
};


module.exports.SubscriptionChannelTypeSchema = SubscriptionChannelTypeSchema;
module.exports.SubscriptionChannelType = SubscriptionChannelType;
