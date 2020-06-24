const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubscriptionStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'SubscriptionStatus' },
});

class SubscriptionStatus extends mongoose.Document {
  constructor(object) {
    super(object, SubscriptionStatusSchema);
    this._type = 'FHIR::SubscriptionStatus';
  }
};


module.exports.SubscriptionStatusSchema = SubscriptionStatusSchema;
module.exports.SubscriptionStatus = SubscriptionStatus;
