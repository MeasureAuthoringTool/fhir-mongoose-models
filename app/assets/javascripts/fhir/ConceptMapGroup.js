const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ConceptMapGroupElementSchema } = require('./ConceptMapGroupElement');
const { ConceptMapGroupUnmappedSchema } = require('./ConceptMapGroupUnmapped');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ConceptMapGroupSchema = BackboneElementSchemaFunction({
   source : String,
   sourceVersion : String,
   target : String,
   targetVersion : String,
   element : [ConceptMapGroupElementSchema],
   unmapped : ConceptMapGroupUnmappedSchema,
   fhirTitle: { type: String, default: 'ConceptMapGroup' },
});

class ConceptMapGroup extends mongoose.Document {
  constructor(object) {
    super(object, ConceptMapGroupSchema);
    this._type = 'FHIR::ConceptMapGroup';
  }
};


module.exports.ConceptMapGroupSchema = ConceptMapGroupSchema;
module.exports.ConceptMapGroup = ConceptMapGroup;
