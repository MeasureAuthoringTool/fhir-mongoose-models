const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DataRequirementCodeFilterSchema } = require('./DataRequirementCodeFilter');
const { DataRequirementDateFilterSchema } = require('./DataRequirementDateFilter');
const { DataRequirementSortSchema } = require('./DataRequirementSort');
const { ElementSchema } = require('./Element');
const { FHIRAllTypesSchema } = require('./FHIRAllTypes');
const { ReferenceSchema } = require('./Reference');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DataRequirementSchema = ElementSchemaFunction({
   type : FHIRAllTypesSchema,
   profile : [String],
   subjectCodeableConcept : CodeableConceptSchema,
   subjectReference : ReferenceSchema,
   mustSupport : [String],
   codeFilter : [DataRequirementCodeFilterSchema],
   dateFilter : [DataRequirementDateFilterSchema],
   limit : Number,
   sort : [DataRequirementSortSchema],
   fhirTitle: { type: String, default: 'DataRequirement' },
});

class DataRequirement extends mongoose.Document {
  constructor(object) {
    super(object, DataRequirementSchema);
    this._type = 'FHIR::DataRequirement';
  }
};


module.exports.DataRequirementSchema = DataRequirementSchema;
module.exports.DataRequirement = DataRequirement;
