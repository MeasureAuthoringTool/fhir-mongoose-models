const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceSpecificationNameOfficialSchema = BackboneElementSchemaFunction({
   authority : CodeableConceptSchema,
   status : CodeableConceptSchema,
   date : DateTime,
   fhirTitle: { type: String, default: 'SubstanceSpecificationNameOfficial' },
});

class SubstanceSpecificationNameOfficial extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationNameOfficialSchema);
    this._type = 'FHIR::SubstanceSpecificationNameOfficial';
  }
};


module.exports.SubstanceSpecificationNameOfficialSchema = SubstanceSpecificationNameOfficialSchema;
module.exports.SubstanceSpecificationNameOfficial = SubstanceSpecificationNameOfficial;
