const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CoverageClassSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   value : String,
   name : String,
   fhirTitle: { type: String, default: 'CoverageClass' },
});

class CoverageClass extends mongoose.Document {
  constructor(object) {
    super(object, CoverageClassSchema);
    this._type = 'FHIR::CoverageClass';
  }
};


module.exports.CoverageClassSchema = CoverageClassSchema;
module.exports.CoverageClass = CoverageClass;
