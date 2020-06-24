const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ValueSetComposeIncludeConceptDesignationSchema } = require('./ValueSetComposeIncludeConceptDesignation');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ValueSetComposeIncludeConceptSchema = BackboneElementSchemaFunction({
   code : String,
   display : String,
   designation : [ValueSetComposeIncludeConceptDesignationSchema],
   fhirTitle: { type: String, default: 'ValueSetComposeIncludeConcept' },
});

class ValueSetComposeIncludeConcept extends mongoose.Document {
  constructor(object) {
    super(object, ValueSetComposeIncludeConceptSchema);
    this._type = 'FHIR::ValueSetComposeIncludeConcept';
  }
};


module.exports.ValueSetComposeIncludeConceptSchema = ValueSetComposeIncludeConceptSchema;
module.exports.ValueSetComposeIncludeConcept = ValueSetComposeIncludeConcept;
