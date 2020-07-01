const mongoose = require('mongoose/browser');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { PrimitiveInstantSchema } = require('./PrimitiveInstant');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SubscriptionChannelSchema } = require('./SubscriptionChannel');
const { SubscriptionStatusSchema } = require('./SubscriptionStatus');

const SubscriptionSchema = DomainResourceSchemaFunction({
  status: SubscriptionStatusSchema,
  contact: [ContactPointSchema],
  end: PrimitiveInstantSchema,
  reason: PrimitiveStringSchema,
  criteria: PrimitiveStringSchema,
  error: PrimitiveStringSchema,
  channel: SubscriptionChannelSchema,
  typeName: { type: String, default: 'Subscription' },
  _type: { type: String, default: 'FHIR::Subscription' },
});

class Subscription extends mongoose.Document {
  constructor(object) {
    super(object, SubscriptionSchema);
    this.typeName = 'Subscription';
    this._type = 'FHIR::Subscription';
  }
}

module.exports.SubscriptionSchema = SubscriptionSchema;
module.exports.Subscription = Subscription;
