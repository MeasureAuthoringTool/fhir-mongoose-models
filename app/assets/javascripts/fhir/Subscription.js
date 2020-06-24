const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { SubscriptionChannelSchema } = require('./SubscriptionChannel');
const { SubscriptionStatusSchema } = require('./SubscriptionStatus');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubscriptionSchema = DomainResourceSchemaFunction({
   status : SubscriptionStatusSchema,
   contact : [ContactPointSchema],
   end : DateTime,
   reason : String,
   criteria : String,
   error : String,
   channel : SubscriptionChannelSchema,
   fhirTitle: { type: String, default: 'Subscription' },
});

class Subscription extends mongoose.Document {
  constructor(object) {
    super(object, SubscriptionSchema);
    this._type = 'FHIR::Subscription';
  }
};


module.exports.SubscriptionSchema = SubscriptionSchema;
module.exports.Subscription = Subscription;
