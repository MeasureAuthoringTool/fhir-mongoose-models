const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ElementDefinitionSchema } = require('./ElementDefinition');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureDefinitionSnapshotSchema = BackboneElementSchemaFunction({
   element : [ElementDefinitionSchema],
   fhirTitle: { type: String, default: 'StructureDefinitionSnapshot' },
});

class StructureDefinitionSnapshot extends mongoose.Document {
  constructor(object) {
    super(object, StructureDefinitionSnapshotSchema);
    this._type = 'FHIR::StructureDefinitionSnapshot';
  }
};


module.exports.StructureDefinitionSnapshotSchema = StructureDefinitionSnapshotSchema;
module.exports.StructureDefinitionSnapshot = StructureDefinitionSnapshot;
