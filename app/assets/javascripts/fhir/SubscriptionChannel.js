const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { MimeTypeSchema } = require('./MimeType');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUrlSchema } = require('./PrimitiveUrl');
const { SubscriptionChannelTypeSchema } = require('./SubscriptionChannelType');

const SubscriptionChannelSchema = BackboneElementSchemaFunction({
  type: SubscriptionChannelTypeSchema,
  endpoint: PrimitiveUrlSchema,
  payload: MimeTypeSchema,
  header: [PrimitiveStringSchema],
  typeName: { type: String, default: 'SubscriptionChannel' },
  _type: { type: String, default: 'FHIR::SubscriptionChannel' },
});

class SubscriptionChannel extends mongoose.Document {
  constructor(object) {
    super(object, SubscriptionChannelSchema);
    this.typeName = 'SubscriptionChannel';
    this._type = 'FHIR::SubscriptionChannel';
  }
}

module.exports.SubscriptionChannelSchema = SubscriptionChannelSchema;
module.exports.SubscriptionChannel = SubscriptionChannel;
