const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ValueSetComposeIncludeConceptDesignationSchema = BackboneElementSchemaFunction({
   language : String,
   use : CodingSchema,
   value : String,
   fhirTitle: { type: String, default: 'ValueSetComposeIncludeConceptDesignation' },
});

class ValueSetComposeIncludeConceptDesignation extends mongoose.Document {
  constructor(object) {
    super(object, ValueSetComposeIncludeConceptDesignationSchema);
    this._type = 'FHIR::ValueSetComposeIncludeConceptDesignation';
  }
};


module.exports.ValueSetComposeIncludeConceptDesignationSchema = ValueSetComposeIncludeConceptDesignationSchema;
module.exports.ValueSetComposeIncludeConceptDesignation = ValueSetComposeIncludeConceptDesignation;
