const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceSpecificationCodeSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   status : CodeableConceptSchema,
   statusDate : DateTime,
   comment : String,
   source : [ReferenceSchema],
   fhirTitle: { type: String, default: 'SubstanceSpecificationCode' },
});

class SubstanceSpecificationCode extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationCodeSchema);
    this._type = 'FHIR::SubstanceSpecificationCode';
  }
};


module.exports.SubstanceSpecificationCodeSchema = SubstanceSpecificationCodeSchema;
module.exports.SubstanceSpecificationCode = SubstanceSpecificationCode;
