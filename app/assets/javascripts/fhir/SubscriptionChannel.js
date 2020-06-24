const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { MimeTypeSchema } = require('./MimeType');
const { SubscriptionChannelTypeSchema } = require('./SubscriptionChannelType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubscriptionChannelSchema = BackboneElementSchemaFunction({
   type : SubscriptionChannelTypeSchema,
   endpoint : String,
   payload : MimeTypeSchema,
   header : [String],
   fhirTitle: { type: String, default: 'SubscriptionChannel' },
});

class SubscriptionChannel extends mongoose.Document {
  constructor(object) {
    super(object, SubscriptionChannelSchema);
    this._type = 'FHIR::SubscriptionChannel';
  }
};


module.exports.SubscriptionChannelSchema = SubscriptionChannelSchema;
module.exports.SubscriptionChannel = SubscriptionChannel;
