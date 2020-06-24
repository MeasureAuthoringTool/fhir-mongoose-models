const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ConceptMapGroupUnmappedModeSchema } = require('./ConceptMapGroupUnmappedMode');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ConceptMapGroupUnmappedSchema = BackboneElementSchemaFunction({
   mode : ConceptMapGroupUnmappedModeSchema,
   code : String,
   display : String,
   url : String,
   fhirTitle: { type: String, default: 'ConceptMapGroupUnmapped' },
});

class ConceptMapGroupUnmapped extends mongoose.Document {
  constructor(object) {
    super(object, ConceptMapGroupUnmappedSchema);
    this._type = 'FHIR::ConceptMapGroupUnmapped';
  }
};


module.exports.ConceptMapGroupUnmappedSchema = ConceptMapGroupUnmappedSchema;
module.exports.ConceptMapGroupUnmapped = ConceptMapGroupUnmapped;
