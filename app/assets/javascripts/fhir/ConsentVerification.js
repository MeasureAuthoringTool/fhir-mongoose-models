const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ConsentVerificationSchema = BackboneElementSchemaFunction({
   verified : Boolean,
   verifiedWith : ReferenceSchema,
   verificationDate : DateTime,
   fhirTitle: { type: String, default: 'ConsentVerification' },
});

class ConsentVerification extends mongoose.Document {
  constructor(object) {
    super(object, ConsentVerificationSchema);
    this._type = 'FHIR::ConsentVerification';
  }
};


module.exports.ConsentVerificationSchema = ConsentVerificationSchema;
module.exports.ConsentVerification = ConsentVerification;
